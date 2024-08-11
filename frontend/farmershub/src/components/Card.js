import * as React from "react";
import { makeStyles, Body1, Caption1, Button, Card as FluentCard, CardHeader, CardPreview } from "@fluentui/react-components";
import { ShareRegular, CartRegular } from "@fluentui/react-icons";
import '../styles/CardStyles.css'; // Ensure the CSS file is imported
import cartTestImg from '../img/cartTest.png'; // Import the image

const useStyles = makeStyles({
  card: {
    margin: "auto",
    width: "500px",
    maxWidth: "100%",
  },
});

const Card = ({ product = {} }) => {
  const styles = useStyles();

  // Destructure properties with default values to avoid errors
  const { user = {}, desc = '', price = '', sellType = '', name = '' } = product;
  const userDesc = user.desc || "No user description available";

  return (
    <FluentCard className={styles.card}>
      <CardHeader
        header={
          <div className="card-header">
            <Body1>
              <h1 className="name">{name}</h1>
            </Body1>
          </div>
        }
        description={<Caption1>{userDesc}</Caption1>}
      />
      <CardPreview>
        <img
          src={cartTestImg} // Use the imported image directly
          alt={desc}
        />
      </CardPreview>

      <div className="footer-buttons">
        <div className="other-buttons">
          <Button>
            {price} {sellType}
          </Button>
          <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
        </div>
        <Button icon={<CartRegular fontSize={16} />} className="buy-button">Buy</Button>
      </div>
    </FluentCard>
  );
};

export default Card;
