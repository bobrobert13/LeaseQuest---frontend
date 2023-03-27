import { useRoute, useRouter } from "vue-router";

export function redirect() {
  const Router = useRouter();
  const route = useRoute;
  const isLogged = (tokenSession) => {
    tokenSession !== ""
      ? Router.push({ path: "home" })
      : Router.push({ path: "login" });
  };
  const rout = (role) => {
    switch (role) {
      case "user":
        Router.push({ path: "home" });
        break;
    }
  };

  return {
    isLogged,
    rout,
    redirect,
  };
}
