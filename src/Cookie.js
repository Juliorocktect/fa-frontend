function setSession(value) {
  const d = new Date();
  d.setTime(d.getTime() + 15 * 60 * 60 * 14 * 1000);
  document.cookie =
    "session=" + value + ";" + "expires=" + d.toUTCString() + ";path=/";
}

function getSession() {
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  let c = ca[0];
  let y = c.substring(8, c.length);
  return y;
}

export { getSession, setSession };
