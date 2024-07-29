import { Outlet } from "react-router";
import Banner from "../Banner";

export default function PaginaPadrao () {
    return (
        <main>
            <Banner/>

            <Outlet/>

        </main>
    )
}