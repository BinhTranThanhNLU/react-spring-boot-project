import { useEffect, useState } from "react";
import { PageTitle } from "../utils/PageTitle";
import { AddressTab } from "./components/AddressTab";
import { OrderTab } from "./components/OrderTab";
import { PaymentMethodTab } from "./components/PaymentMethodTab";
import { ProfileMenu } from "./components/ProfileMenu";
import { ReviewTab } from "./components/ReviewTab";
import { SettingTab } from "./components/SettingTab";
import { WishlistTab } from "./components/WishListTab";
import { OrderModel } from "../../models/OrderModel";
import { API_BASE_URL } from "../../config/config";
import { SpinningLoading } from "../utils/SpinningLoading";
import { UserModel } from "../../models/UserModel";

export const AccountPage = () => {
  const [orders, setOrders] = useState<OrderModel[] | null>(null);
  const [user, setUser] = useState<UserModel | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem("token");
  const userStor = localStorage.getItem("user");
  const userModel: UserModel | null = userStor ? JSON.parse(userStor) as UserModel : null;

  const idUser = userModel?.id;

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/orders/my`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to fetch orders!!!");

      const data: OrderModel[] = await response.json();
      setOrders(data);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${idUser}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to fetch user !!!");

      const data: UserModel = await response.json();
      setUser(data);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    fetchUser();
    fetchOrders();
  }, [token]);

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
            <ProfileMenu orders={orders} user={user}/>
            <div className="col-lg-9">
              <div className="content-area">
                <div className="tab-content">
                  <OrderTab orders={orders} />
                  <WishlistTab />
                  <PaymentMethodTab />
                  <ReviewTab />
                  <AddressTab />
                  <SettingTab user={user}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
