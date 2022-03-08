import Errors from './Errors';

export default class Form {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   */
  constructor(data) {
    this.originalData = data;

    for (let field in data) {
      this[field] = data[field];
    }

    this.errors = new Errors();
    this.successMessage = '';
    this.loading = false;
  }

  isLoading() {
    return this.loading;
  }

  hasSuccessMessage() {
    return !!this.successMessage;
  }

  getSuccessMessage() {
    return this.successMessage;
  }


  /**
   * Fetch all relevant data for the form.
   */
  data() {
    let data = {};

    for (let property in this.originalData) {
      data[property] = this[property];
    }

    return data;
  }

  remove(field) {
    if (field) {
      delete this.originalData[field];
    }
  }


  /**
   * Reset the form fields.
   */
  reset() {
    for (let field in this.originalData) {
      this[field] = '';
    }

    this.errors.clear();
  }


  /**
   * Send a POST request to the given URL.
   * .
   * @param {string} url
   */
  post(url) {
    return this.submit('post', url);
  }


  /**
   * Send a PUT request to the given URL.
   * .
   * @param {string} url
   */
  put(url) {
    return this.submit('put', url);
  }


  /**
   * Send a PATCH request to the given URL.
   * .
   * @param {string} url
   */
  patch(url) {
    return this.submit('patch', url);
  }


  /**
   * Send a DELETE request to the given URL.
   * .
   * @param {string} url
   */
  delete(url) {
    return this.submit('delete', url);
  }


  /**
   * Submit the form.
   *
   * @param {string} requestType
   * @param {string} url
   */
  submit(requestType, url) {
    this.loading = true;
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.data())
          .then(response => {
            this.onSuccess(response.data);

            resolve(response.data);
          })
          .catch(error => {
            this.onFail(error.response.data);

            reject(error.response.data);
          });
    });
  }


  /**
   * Handle a successful form submission.
   *
   * @param {object} data
   */
  onSuccess(data) {
    this.successMessage = data.message;

    this.reset();
    this.loading = false;
  }


  /**
   * Handle a failed form submission.
   *
   * @param {object} data
   */
  onFail(data) {
    this.errors.record(data);
    this.loading = false;
  }
}