const consent = localStorage.getItem("lgpd-aceito");

      // libera analytics automaticamente
      if (consent === "true") {
        gtag("consent", "update", {
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
          analytics_storage: "granted",
        });
      } else {
        // Se ainda não decidiu, mostra o banner
        document.getElementById("cookie-banner").style.display = "flex";
      }

      document
        .getElementById("accept-cookies")
        .addEventListener("click", function () {
          localStorage.setItem("lgpd-aceito", "true");

          gtag("consent", "update", {
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
            analytics_storage: "granted",
          });

          document.getElementById("cookie-banner").style.display = "none";
        });