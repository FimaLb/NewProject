onload()
{
    $.get('url', function(data){
        
        if(data && data.lenght <= 0)
            return;
        
        for(var i = 0; i < data.lenght; i++)
        $('.table').add(
            data[i]
        )
    });
}