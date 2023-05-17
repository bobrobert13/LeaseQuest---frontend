import { useRoute, useRouter } from "vue-router";

export function redirect() {
  const Router = useRouter();
  const route = useRoute;
  const isLogged = (tokenSession) => {
    tokenSession !== ""
      ? Router.push({ path: "/" })
      : Router.push({ path: "login" });
  };
  const rout = (role) => {
    switch (role) {
      case "user":
        Router.push({ path: "/" });
        break;
      case "admin":
        Router.push({ path: "/" });
        break;
    }
  };

  return {
    isLogged,
    rout,
    redirect,
  };
}
