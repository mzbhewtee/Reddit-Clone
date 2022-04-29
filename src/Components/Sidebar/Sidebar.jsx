import { Footer } from "./Footer/Footer";
import { RecentPost } from "./RecentPost/RecentPost";
import { CreatePost } from "./CreatePost/CreatePost";
import { TopCommunity } from "./TopCommunity/TopCommunity";

export const Sidebar = () => {
  return (
    <>
      <TopCommunity />
      <CreatePost />
       <RecentPost />
      <Footer />
    </>
  );
};
