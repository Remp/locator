exports.homeList = function(req, res){
    res.render('index', {
        spots: [
            {
                name: 'Mafia',
                rating: 4,
                address: 'Маловского 10',
                tel: '0964335024',
                facilities: [
                    'Хороший wi-fi'
                ],
                range: '100м'
            }
        ]
    })
}
exports.locationInfo = function(req, res){
    res.render('index', {title:'location info'})
}
exports.addReview = function(req, res){
    res.render('index', {title:'add review'})
}