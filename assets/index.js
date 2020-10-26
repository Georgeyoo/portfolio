// Reset opener property to avoid target _blank vulnerability
let newWnd = window.open();
newWnd.opener = null;