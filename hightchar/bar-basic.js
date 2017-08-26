 $(function () {
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: '��������&�������'
        },
        subtitle: {
            text: '������Դ: ����/��������'
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
                text: '����&��������',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: '��'
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
            name: '����������',
            data: [107, 31, 635, 203, 2]
        }, {
            name: '����������',
            data: [133, 156, 947, 408, 6]
        }, {
            name: '�����ܼ���',
            data: [973, 914, 4054, 732, 34]
        }, {
            name: '�����ܼ���',
            data: [973, 914, 4054, 732, 34]
        }
                ]
    });
});
