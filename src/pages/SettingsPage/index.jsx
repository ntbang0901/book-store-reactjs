import Content from "./Content"
import MyProfile from "./MyProfile"
import SideBar from "./SideBar"
import "./SettingsPage.scss"
import MyOrder from "./MyOrder"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getUserByUsername } from "../../services/userService"

function SettingsPage() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const FecthData = async () => {
        try {
            let res = await getUserByUsername()
            if (res.data.errCode === 0) {
                setUser(res.data.user)
                setLoading(false)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        setLoading(true)
        FecthData()
    }, [])

    const routes = [
        {
            exact: true,
            path: "/account/profile",
            title: "Thông tin tài khoản",
            main: <MyProfile user={user} loading={loading} />,
        },

        {
            path: "/account/order",
            title: "Đơn hàng",
            main: <MyOrder />,
        },
        {
            path: "/account/notification",
            title: "Thông báo",
            main: () => <h2>notification</h2>,
        },
    ]

    return (
        <div className="profile-sidebar">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <SideBar routes={routes} />
                    </div>
                    <div className="col-sm-12">
                        <Content routes={routes} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsPage
