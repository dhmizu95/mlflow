// MLflow's Logout opens an XHR with user "mlflow-logged-out-<random>"; clear our login cookie when it does.
(function (open) {
  XMLHttpRequest.prototype.open = function (method, url, async, user) {
    if (typeof user === 'string' && user.indexOf('mlflow-logged-out-') === 0) {
      document.cookie = 'auth=; path=/; max-age=0';
    }
    return open.apply(this, arguments);
  };
})(XMLHttpRequest.prototype.open);
