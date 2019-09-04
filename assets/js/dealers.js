$(function() {
    $.post({
        url: 'https://api.connectedcars.io/graphql',
        data: JSON.stringify({ "query": 
            "query Workshops { workshops(first:1000, active: true) { items { brand name address zip city } } }"
        }),
        contentType: 'application/json'
    }).done(function (res) {
        var workshops = res.data.workshops.items;
        var vwList = $('#vw-list')
        var audiList = $('#audi-list')
        var skodaList = $('#skoda-list')
        var seatList = $('#seat-list')

        workshops.forEach(function(workshop) {
            var postWorkshop = '<li class="mb-4"><h5 class="mb-0">' + workshop.name + '</h5><div>' + workshop.address + '</div><div>' + workshop.zip + ' ' + workshop.city + '</div></li>'

            if(workshop.zip.length <= 4 && workshop.name !== 'Beta værksted') {
                switch (workshop.brand) {
                    case 'volkswagen':
                        vwList.append(postWorkshop);
                        break;
                    case 'audi':
                        audiList.append(postWorkshop);
                        break;
                    case 'skoda':
                        skodaList.append(postWorkshop);
                        break;
                    case 'seat':
                        seatList.append(postWorkshop); 
                        break;
                    default:
                        return null;
                }
            }
        });
    }).fail(function (error) {
        console.log(error)
        $('.lead').append('<h4>Failed to load list. Please refresh to try again.</h4>')
    })
});
