const Product = require('mongoose').model('Product');

module.exports = {
    index(request, response) {
        console.log('getting products from server');
        Product.find({})
          .then(products => response.json(products))
          .catch(console.log);
      },
      create(request, response) {
        Product.create(request.body)
          .then(product => response.json(product))
          .catch(error => {
            response
              .status(502)
              .json(Object.keys(error.errors).map(key => error.errors[key].message)
              );
          });
      },
      show(request, response) {
        Product.findById(request.params.product_id)
          .then(product => response.json(product))
          .catch(console.log);
      },
      update(request, response) {
        Product.findByIdAndUpdate(request.params.product_id, request.body, { new: true })
          .then(product => response.json(product))
          .catch(console.log);
      },
      destroy(request, response) {
        Product.findByIdAndRemove(request.params.product_id)
          .then(product => response.json(product))
          .catch(console.log);
      },
}