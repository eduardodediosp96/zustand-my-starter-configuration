// @React-Hooks
import { useState } from "react";

// @Styles
import {
  ProductContent,
  ProductImage,
  ProductInfo,
  ProductCart,
} from "./Product.styles";

// @Components
import NumericInput from "@commonComponents/Inputs/NumericInput/Numericinput";
import Button, {
  ButtonSize,
  ButtonType,
} from "@commonComponents/Button/Button";
import Typography from "@commonComponents/Typography/Typography";
import SVGIcon from "@commonComponents/SvgIcon/SvgIcon";

// @Icons
import { PlusIcon, TrashBinIcon } from "@icons";

// @Types
import { type Product } from "@services/product/products.types";

// @Store
import useStore from "@store/store";

interface ProductProps {
  product: Product;
}

const Product = ({ product }: ProductProps) => {
  const [quantity, setQuantity] = useState(0);
  const { cartProducts, addProductToCart, removeProductFromCart } = useStore(
    (state) => ({
      cartProducts: state.cartProducts,
      addProductToCart: state.addProductToCart,
      removeProductFromCart: state.removeProductFromCart,
    })
  );
  const isInCart = cartProducts.some((p) => p.product.id === product.id);

  const handleAddToCart = () => {
    addProductToCart(product, quantity);
    setQuantity(0);
  };

  const handleRemoveFromCart = () => {
    removeProductFromCart(product.id);
    setQuantity(0);
  };

  return (
    <ProductCart>
      <ProductImage src={product.image} disabled={!product.inStock} />
      <ProductContent>
        <ProductInfo>
          <Typography variant="cartTitle">{product.name}</Typography>
          <Typography variant="cartPrice">${product.price}</Typography>
        </ProductInfo>
        <Typography
          variant="cartSmallTypo"
          color={product.inStock ? "success" : "error"}
        >
          {product.inStock
            ? `Only ${product.stock} left in stock`
            : "Out of stock"}
        </Typography>
        <ProductInfo>
          {!isInCart ? (
            <NumericInput
              min={0}
              max={product.stock}
              value={quantity}
              onValueChange={setQuantity}
              disabled={!product.inStock}
            />
          ) : null}
          {!isInCart ? (
            <Button
              buttonType={ButtonType.TERTIARY}
              onClick={handleAddToCart}
              disabled={!product.inStock}
              size={ButtonSize.SMALL}
            >
              <SVGIcon icon={PlusIcon} size="0.75rem" />
              <Typography variant="cartSmallTypo">Add to cart</Typography>
            </Button>
          ) : (
            <Button
              buttonType={ButtonType.TERTIARY}
              onClick={handleRemoveFromCart}
              size={ButtonSize.SMALL}
            >
              <SVGIcon icon={TrashBinIcon} size="0.75rem" />
              <Typography variant="cartSmallTypo">Remove from cart</Typography>
            </Button>
          )}
        </ProductInfo>
      </ProductContent>
    </ProductCart>
  );
};

export default Product;
