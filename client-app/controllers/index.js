exports.getindex = (req, res, next) => {
    try {
        res.render(
            'index',
            {
                title: 'Lazada.co.th ช้อปปิ้งออนไลน์ ลาซาด้า ดีลดี ส่งฟรีทั่วไทย',
                path: '/'
            }
        );
    } catch (err) {
        console.log(err);
    }
}