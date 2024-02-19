function setSession(value) {
  const d = new Date();
  d.setTime(d.getTime() + 15 * 60 * 60 * 14 * 1000);
  document.cookie =
    "session=" + value + ";" + "expires=" + d.toUTCString() + ";path=/";
}

function getSession() {
  let decodedCookie = decodeURIComponent(document.cookie);
  var session = decodedCookie.split(";")[0];
  return session.substring(8, session.length);
}

export { getSession, setSession };
