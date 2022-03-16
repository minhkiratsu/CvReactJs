import React, { Component } from 'react';

class Left_container extends Component {
    render() {
        return (
            <div className="container-left">
                <div className="information">
                    <div className="inf-person">
                        <h1>Thông tin cơ bản</h1>
                        <div className="inf-date">
                            <svg className="date-img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
                            </svg>
                            <h3>05/03/1999</h3>
                        </div>
                        <div className="inf-sex">
                            <svg className="sex-img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                            <h3>Nam</h3>
                        </div>
                        <div className="inf-phone">
                            <svg className="phone-img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <h3>0329881683</h3>
                        </div>
                        <div className="inf-mail">
                            <svg className="mail-img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z"/>
                                <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
                            </svg>
                            <h3>capminh531999@gmail.com</h3>
                        </div>
                        <div className="inf-address">
                            <svg className="address-img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                            <h3>16/14 Nguyễn Khuyến, Liên Chiểu, Đà Nẵng</h3>
                        </div>
                        <div className="inf-fb">
                            <svg className="fb-img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>
                            <h3>https://www.facebook.com/devil.kiratsu/</h3>
                        </div>
                    </div>
                    <div className="target">
                        <h1>Mục tiêu nghề nghiệp</h1>
                        <div className="in-target">
                            <h4>Không ngừng học tập, trau dồi những kiến thức về lập trình để phát triển kỹ năng chuyên môn</h4>
                            <h4>Học tập thêm về Back-end để phát triển cho mục tiêu tương lai là trở thành 1 Web Developer </h4>
                        </div>
                    </div>
                    <div className="skills">
                        <h1>Kỹ năng</h1>
                        <div className="skill-bar">
                            <p>English</p>
                            <div className="con-skill">
                                <div className="skill english">50%</div>
                            </div>

                            <p>ReactJs</p>
                            <div className="con-skill">
                                <div className="skill reactjs">50%</div>
                            </div>

                            <p>HTML</p>
                            <div className="con-skill">
                                <div className="skill html">80%</div>
                            </div>

                            <p>CSS</p>
                            <div className="con-skill">
                                <div className="skill css">80%</div>
                            </div>
                        </div>
                    </div> 
                    <div className="hobby">
                        <h1>Sở thích</h1>
                        <div className="in-hobby">
                            <h4>- Code là đam mê</h4>
                            <h4>- Tìm hiểu công nghệ mới</h4>
                            <h4>- Nghe nhạc, chơi game lúc thời gian rảnh</h4>
                            <h4>- Đi phượt, du lịch</h4>
                        </div>
                    </div>             
                </div>
            </div>
        );
    }
}

export default Left_container;