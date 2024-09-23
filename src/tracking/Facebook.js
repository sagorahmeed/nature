import React, { useEffect } from "react";

const Facebook = () => {
  useEffect(() => {
    const initFbPixel = (f, b, e, v, n, t, s) => {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    };

    initFbPixel(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    if (window.fbq) {
      window.fbq("init", "1233191571020698"); // Replace with your Pixel ID
      window.fbq("track", "PageView");
    }
  }, []);

  return null;
};

export default Facebook;
