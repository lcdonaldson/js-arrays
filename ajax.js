%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
       Ajax below
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

 $(document).on('click', '.openBtn', function () {
        
        displayLoading.show();
        var id = $(this).data("id");

                 // scan times        
        $.ajax({
            url: "gen/auditMedia.php",
            type: 'POST',
            dataType: 'JSON',
            data: {
                id: id,
                action: "scanstime"
            },
            
            success: function (data) {
                displayLoading.hide();
                setTimeout(function () {
                   
                    $("#mediaStatsModal").modal("show");
                    $('.scanTime').html(data.minutes);                   

                }, 500);
            }

        });
        
                 // number of scans
        $.ajax({
            url: "gen/auditMedia.php",
            type: 'POST',
            dataType: 'JSON',
            data: {
                id: id,
                action: "scansmodal"
            },
            
            success: function (data) {
                displayLoading.hide();
                setTimeout(function () {
                   
                    $("#mediaStatsModal").modal("show");                   
                    
                    for (var obj in data){
                        
                      $('#users-table').append(
                      '<tr>'+
                          '<td class="scanFName">' + data[obj].firstName + '</td>' +
                          '<td class="scanLName">' + data[obj].lastName + '</td>' +
                          '<td class="numberOfScans">' + data[obj].id + '</td>'+
                      '</tr>');
                    
                    };

                }, 500);
            }

        });
        
        
    });
