const secrets = require("./env_old.js").secrets;
const app = require("express")();
const stripe = require("stripe")(secrets.stripeKey);

app.use(require("body-parser").text());

app.post("/charge", async (req, res) => {
    try {
        const bodyContent = JSON.parse(req.body);

      let {status} = await stripe.charges.create({
        amount: bodyContent.price,
        currency: "usd",
        description: "Shipping Label Charge",
        source: bodyContent.token
      });

      res.json({status});
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
  });

  app.listen(9000, () => console.log("Listening on port 9000"));
