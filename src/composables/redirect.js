import { useRoute, useRouter } from "vue-router";

export function redirect() {
  const Router = useRouter();
  const route = useRoute;
  const rout = (role) => {
    console.log("REDIRECT...", role);
    switch (role) {
      case "user":
        Router.push({ path: "home" });
        break;
    }
  };

  return {
    rout,
    redirect,
  };
}
