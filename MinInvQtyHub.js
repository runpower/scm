

LoadData();

function LoadData() {
    $("#MinInvQty").datagrid({
        rownumbers: true,
        singleSelect: true,
        border: true,
        height: "100%",
        url: "/MinInvQty/MinInvQty",
        striped: true,//各行变色
        pagination: true,
        idField: "RowID",
        columns: [
            [
                { title: 'RowID', field: "RowID", hidden: true },
                 { title: '料号', field: "PartNo", halign: "center", width: 100 },
                { title: '品名', field: "GoodsName", align: "center", width: 120 },
                { title: '仓库号', field: "HubCode", hidden: true },

                { title: '客户号', field: "CustomerCode", halign: "center", hidden: true },
         
                { title: '客户', field: "CustomerName", halign: "center", width: 100 },
                { title: '仓库', field: "HubName", halign: "center", width: 100 },
                
          
                {
                    title: '库存', field: "Ctns", halign: "center", width: 100, editor: {
                        type: "numberbox"
                    }
                },
                {
                    title: '预警类型', field: "LowMin", align: "center", width: 100
                  
                },
                {
                    title: '安全库存量', field: "MinInvQty", halign: "center", width: 120, editor: {
                        type:"text"
                    }
                },
                     {
                         title: '补货量', field: "Ctnss", halign: "center", width: 120, editor: {
                             type: "text"
                         }
                     },
           
            ]
        ],
        toolbar: "#MinInvQty"
       

    });
}


function Search() {

    $("#MinInvQty").datagrid({
        rownumbers: true,
        singleSelect: true,
        border: true,
        height: "100%",
        url: "/MinInvQty/MinInvQty",
        striped: true,//各行变色
        pagination: true,
        idField: "RowID",
        queryParams: {
            
            PartNo: $("#txtPartNo").textbox("getValue"),
            GoodsName: $("#txtCustomerOrderCode").textbox("getValue"),
            HubName: $("#txtCustomerNo").textbox("getValue"),
            CustomerName: $("#cboStatus").textbox("getValue"),
        },
        columns: [
             [
                 { title: 'RowID', field: "RowID", hidden: true },
                  { title: '料号', field: "PartNo", halign: "center", width: 100 },
                 { title: '品名', field: "GoodsName", align: "center", width: 120 },
                 { title: '仓库号', field: "HubCode", hidden: true },

                 { title: '客户号', field: "CustomerCode", halign: "center", hidden: true },

                 { title: '客户', field: "CustomerName", halign: "center", width: 100 },
                
                 { title: '仓库', field: "HubName", halign: "center", width: 100 },


                 {
                     title: '库存', field: "Ctns", halign: "center", width: 100, editor: {
                         type: "numberbox"
                     }
                 },
                 {
                     title: '预警类型', field: "LowMin", align: "center", width: 100

                 },
                 {
                     title: '安全库存量', field: "MinInvQty", halign: "center", width: 120, editor: {
                         type: "text"
                     }
                 },
                      {
                          title: '补货量', field: "Ctnss", halign: "center", width: 120, editor: {
                              type: "text"
                          }
                      },

             ]
        ],
        //toolbar: "#MinInvQty",


    });
}
