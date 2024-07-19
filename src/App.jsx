import { useState } from "react";
import image from "./assets/avt.jpg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    return (
        <>
            <div className="container">
                <h1 className="name">Hoàng Bảo Trung</h1>
                <p className="position">Lập trình viên Front-end</p>
                <h2 className="section-heading info">Thông tin cá nhân</h2>
                <div className="wraps wraps-info">
                    <div>
                        <div className="wrap">
                            <p className="in">Họ và tên</p>
                            <p>Hoàng Bảo Trung</p>
                        </div>
                        <div className="wrap">
                            <p className="in">Ngày sinh</p>
                            <p>24/05/2000</p>
                        </div>
                        <div className="wrap">
                            <p className="in">Số điện thoại</p>
                            <p>+84 823240040</p>
                        </div>
                        <div className="wrap">
                            <p className="in">Email</p>
                            <p>trunghoang.240500@gmail.com</p>
                        </div>
                        <div className="wrap">
                            <p className="in">Địa chỉ</p>
                            <p>Đà Nẵng, Việt Nam</p>
                        </div>
                    </div>
                    <img src={image} alt="" className="image" />
                </div>

                <h2 className="section-heading info">Tổng quan</h2>
                <div className="wraps">
                    <div className="wrap">
                        <p>
                            - Trên 2 năm kinh nghiệm lập trình, giao tiếp tốt,
                            học hỏi nhanh
                        </p>
                    </div>
                    <div className="wrap">
                        <p>- Điểm mạnh: Công nghệ Front-end</p>
                    </div>
                    <div className="wrap">
                        <p>- Thành thạo HTML, CSS, JavaScript</p>
                    </div>
                    <div className="wrap">
                        <p>
                            - Thành thạo về JavaScript, bao gồm thao tác DOM và
                            mô hình đối tượng JavaScript
                        </p>
                    </div>
                    <div className="wrap">
                        <p>
                            - Hiểu biết sâu sắc về React.js và các nguyên tắc
                            ghi điểm của nó
                        </p>
                    </div>
                    <div className="wrap">
                        <p>
                            - Có kinh nghiệm với các quy trình làm việc React.js
                            phổ biến (như Flux hoặc Redux)
                        </p>
                    </div>
                    <div className="wrap">
                        <p>
                            - Làm quen với các thông số kỹ thuật mới hơn của
                            EcmaScript
                        </p>
                    </div>
                    <div className="wrap">
                        <p>
                            - Có kinh nghiệm vững chắc về: JavaScript (ReactJS,
                            React-native), MySQL, JSON, API, Docker
                        </p>
                    </div>
                    <div className="wrap">
                        <p>
                            - Thành thạo hệ điều hành: Linux (Ubuntu, OSX),
                            Windows
                        </p>
                    </div>
                    <div className="wrap">
                        <p>- Giao tốt tiếng Anh tốt</p>
                    </div>
                    <div className="wrap">
                        <p>
                            - Có khả năng học hỏi và áp dụng công nghệ mới nhanh
                        </p>
                    </div>
                    <div className="wrap">
                        <p>- Địa điểm làm việc hiện tại: Đà Nẵng, Việt Nam</p>
                    </div>
                </div>

                <h2 className="section-heading info">Học vấn</h2>
                <div className="wraps">
                    <div className="wrap top">
                        <p className="bold">09/2022 - 03/2025</p>
                        <p className="bold">
                            Trường Cao đẳng FPT Polytechnic <br />
                            Chuyên ngành: Phát triển phần mềm
                        </p>
                    </div>
                </div>

                <h2 className="section-heading info">Kỹ năng</h2>
                <div className="wraps">
                    <div className="wrap top">
                        <p className="in">Chính</p>
                        <div>
                            <p className="dot">
                                HTML, CSS, JavaScript (ReactJS)
                            </p>
                            <p className="dot">RESTful API</p>
                            <p className="dot">MySQL</p>
                            <p className="dot">Docker</p>
                        </div>
                    </div>
                    <div className="wrap top">
                        <p className="in">Phụ</p>
                        <div>
                            <p className="dot">Sass</p>
                            <p className="dot">Python</p>
                        </div>
                    </div>
                </div>

                <h2 className="section-heading info">Thành tựu</h2>
                <div className="wraps">
                    <div className="wrap top">
                        <p className="in">03/2024</p>
                        <div>
                            <p className="bold">
                                Giải nhất Hackathon Web Design
                            </p>
                            <a
                                href="https://kingcreatbug.github.io/portfolio/"
                                className="tagA"
                            >
                                https://kingcreatbug.github.io/portfolio/
                            </a>
                        </div>
                    </div>
                    <div className="wrap top">
                        <p className="in">08/2024</p>
                        <div>
                            <p className="bold">Giải nhì Best Web Design</p>
                            <a href="https://anhdev.id.vn/" className="tagA">
                                https://anhdev.id.vn/
                            </a>
                        </div>
                    </div>
                    <div className="wrap top">
                        <p className="in">07/2024</p>
                        <div>
                            <p className="bold">Giải nhì Hackathon AI</p>
                            <a
                                href="https://kingcreatbug.github.io/doctor-AI/"
                                className="tagA"
                            >
                                https://kingcreatbug.github.io/doctor-AI/
                            </a>
                        </div>
                    </div>
                </div>

                <h2 className="section-heading info">Sản phẩm</h2>
                <div className="wraps bot">
                    <div className="box">
                        <h3 className="prod-name">Website kiến trúc</h3>
                        <p>(06/2024 - 07/2024)</p>

                        <table className="table">
                            <tr className="tr">
                                <th className="th">Mô tả</th>
                                <td className="td">Website cho kiến trúc</td>
                            </tr>
                            <tr className="tr">
                                <th className="th">Công nghệ</th>
                                <td className="td">
                                    - Frontend: HTML, Scss, Js
                                    <br />
                                    -Thiết kế: Figma
                                </td>
                            </tr>
                            <tr className="tr">
                                <th className="th">Link</th>
                                <td className="td">
                                    <a
                                        className="tagA"
                                        href="https://kingcreatbug.github.io/architech/"
                                    >
                                        https://kingcreatbug.github.io/architech/
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="box">
                        <h3 className="prod-name">Website kiến trúc</h3>
                        <p>(06/2024 - 07/2024)</p>

                        <table className="table">
                            <tr className="tr">
                                <th className="th">Mô tả</th>
                                <td className="td">Website cho kiến trúc</td>
                            </tr>
                            <tr className="tr">
                                <th className="th">Công nghệ</th>
                                <td className="td">
                                    - Frontend: HTML, Scss, Js
                                    <br />
                                    -Thiết kế: Figma
                                </td>
                            </tr>
                            <tr className="tr">
                                <th className="th">Link</th>
                                <td className="td">
                                    <a
                                        className="tagA"
                                        href="https://kingcreatbug.github.io/architech/"
                                    >
                                        https://kingcreatbug.github.io/architech/
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
