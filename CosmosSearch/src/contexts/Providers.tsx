import { iChildren } from "./@childrenType";
import { CommentsProvider } from "./CommentsContext/CommentsContext";
import { LinksProvider } from "./LinksContext/LinksContext";
import { UserProvider } from "./UserContext/UserContext";

export const Providers = ({ children }: iChildren) => {
  return (
    <LinksProvider>
      <UserProvider>
          <CommentsProvider>{children}</CommentsProvider>
      </UserProvider>
    </LinksProvider>
  );
};

