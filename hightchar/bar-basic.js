 $(function () {
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: '订单导入&配送完成'
        },
        subtitle: {
            text: '数据来源: 订单/配送数据'
        },
        xAxis: {
            categories: ['2017-7-13', '2017-7-14', '2017-7-15', '2017-7-16', '2017-7-18'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '订单&配送数据',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: '个'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    allowOverlap: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '订单总条数',
            data: [107, 31, 635, 203, 2]
        }, {
            name: '配送总条数',
            data: [133, 156, 947, 408, 6]
        }, {
            name: '订单总件数',
            data: [973, 914, 4054, 732, 34]
        }, {
            name: '配送总件数',
            data: [973, 914, 4054, 732, 34]
        }
                ]
    });
});
