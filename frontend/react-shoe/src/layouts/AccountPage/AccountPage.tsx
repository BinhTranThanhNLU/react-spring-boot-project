import { PageTitle } from "../utils/PageTitle";
import { AddressTab } from "./components/AddressTab";
import { OrderTab } from "./components/OrderTab";
import { PaymentMethodTab } from "./components/PaymentMethodTab";
import { ProfileMenu } from "./components/ProfileMenu";
import { ReviewTab } from "./components/ReviewTab";
import { SettingTab } from "./components/SettingTab";
import { WishlistTab } from "./components/WishListTab";

export const AccountPage = () => {
  return (
    <main className="main">
      <PageTitle
        title="Tài khoản"
        breadcrumbs={[
          { label: "Trang chủ", path: "/home" },
          { label: "Tài khoản" },
        ]}
      />

      <section id="account" className="account section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            <ProfileMenu />
            <div className="col-lg-9">
              <div className="content-area">
                <div className="tab-content">
                  <OrderTab />
                  <WishlistTab />
                  <PaymentMethodTab />
                  <ReviewTab />
                  <AddressTab />
                  <SettingTab />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
