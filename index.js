const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
  if (user) {
    db.collection('users').doc(user.uid).get().then(doc => {
      const html = `
        <div>Username: ${doc.data().username}</div>
        <div>Address: ${doc.data().address}</div>
        <div>Email: ${user.email}</div>
      `;
      accountDetails.innerHTML = html;
    });
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  }
  else {
    accountDetails.innerHTML = '';
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};

document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

});