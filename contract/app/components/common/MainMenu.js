"use client";
import menuItems from "@/data/menuItems";
import { isParentActive } from "@/utils/isMenuActive";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainMenu = () => {
    const path = usePathname();

    return (
        <>
            {menuItems.map((menuItem, index) => (
                <li className="" key={index}>
                    <Link
                        className={
                            isParentActive(menuItem.subMenu, menuItem, path)
                            ? "active"
                            : ""
                            // isParentActive(menuItem.subMenu, path)
                            //     ? "active"
                            //     : ""
                            // path == menuItem.path
                            //     ? "active"
                            //     : ""

                        }
                        href={menuItem.path ? menuItem.path : ""}
                    >
                        {/* <span className="title">{menuItem.label}</span> */}
                        <h4 className="">{menuItem.label}</h4>
                        {/* <Link href={menuItem.path ? menuItem.path : "#"} className="title">{menuItem.label}</Link> */}
                         {/* <Link
                        href={menuItem.path ? menuItem.path : "#"}
                        className="title"
                    >
                        {menuItem.label}
                    </Link>
                        */}
                        {/* <span className="arrow"></span> */}
                    </Link>
                    <ul className="sub-menu">
                        {menuItem.subMenu.map((subItem, subIndex) => (
                            <li key={subIndex} className="dropitem">
                                {subItem.subMenu ? (
                                    <>
                                        <Link
                                            className={
                                                isParentActive(
                                                    subItem.subMenu,
                                                    path
                                                )
                                                    ? "active"
                                                    : ""
                                            }
                                            href="#"
                                        >
                                            {subItem.label}
                                        </Link>
                                        <span className="arrow"></span>
                                        <ul className="sub-menu">
                                            {subItem.subMenu.map(
                                                (
                                                    nestedSubItem,
                                                    nestedSubIndex
                                                ) => (
                                                    <li key={nestedSubIndex}>
                                                        <Link
                                                            className={
                                                                path ===
                                                                nestedSubItem.path
                                                                    ? "active"
                                                                    : ""
                                                            }
                                                            href={
                                                                nestedSubItem.path
                                                            }
                                                        >
                                                            {
                                                                nestedSubItem.label
                                                            }
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </>
                                ) : (
                                    <Link
                                        href={subItem.path}
                                        className={
                                            path === subItem.path
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        {subItem.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </li>
                
                
            ))}
        </>
    );
};

export default MainMenu;
