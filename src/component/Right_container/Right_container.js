import React, { Component } from 'react';

class Right_container extends Component {
    render() {
        return (
            <div className="container-right">
                <div className="information">
                    <div className="literacy">
                        <h1>Trình độ học vấn</h1>
                        <hr/>
                        <h2>Đại học Sư phạm Đà Nẵng</h2>
                        <p>Ngành học: Công nghệ thông tin (từ tháng 9 năm 2017 đến tháng 12 năm 2021)</p>
                        <p>Chuyên ngành: Front end</p>
                    </div>
                    <div className="experience">
                        <h1>Kinh nghiệm làm việc</h1>
                        <hr/>
                        <h2>Công ty...</h2>
                        <p>Vị trí: Thực tập sinh Web Front End</p>
                        <p>Học tập những kiến thức về lập trình Web Front End</p>
                        <p>- Được học ReactJs cơ bản</p>
                        <p>- Trau dồi thêm kiến thức về HTML, Css</p>
                        <p>- Học được cách xây dựng 1 giao diện website 1 cách tối ưu nhất</p>
                    </div>
                    <div className="activities">
                        <h1>Hoạt động</h1>
                        <hr/>
                        <h2>Làm việc ở vị trí Trưởng ban kỷ thuật nhóm Hand In Hand</h2>                      
                        <p>Tham gia và hoạt động trong nhóm tình nguyện từ thiện Hand In Hand trường Đại học Sư phạm Đà Nẵng ở vị trí Trưởng ban kỷ thuật từ tháng 8 năm 2018 đến tháng 1 năm 2021</p>
                        <h2>Tham gia chương trình Tình nguyện từ thiện</h2>
                        <p>- Tham gia chương trình Tình nguyện hè năm 2018 tại Quảng Nam</p>
                        <p>- Tham gia chương trình tình nguyện ngắn ngày 30/4 - 01/5 năm 2019 tại Quảng Nam</p>
                        <p>- Tham gia 1 số chương trình khác như Đông ấm (phát quà từ thiện cho người già, lao công, những người bán vé số), tổ chức Tết thiếu nhi cho trẻ em ở bệnh viện Ung Bướu (Đà Nẵng), tổ chức trung thu cho trẻ em ở Trung tâm Bảo trợ xã hội Đà Nẵng</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Right_container;