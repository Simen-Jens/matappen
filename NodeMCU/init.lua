wifi.sta.disconnect()
wifi.setmode(wifi.STATIONAP)
srv=net.createServer(net.TCP)

function displayConfig()
    srv:listen(80,function(conn)
    conn:on("receive", function(client,request)
        local buf = "";
        local _, _, method, path, vars = string.find(request, "([A-Z]+) (.+)?(.+) HTTP");
        if(method == nil)then
            _, _, method, path = string.find(request, "([A-Z]+) (.+) HTTP");
        end
        local _GET = {}
        if (vars ~= nil)then
            for k, v in string.gmatch(vars, "(%w+)=(%w+)&*") do
                _GET[k] = v
            end
        end
buf = buf.."<style>p,k,h{width:100%;text-align:center;padding-top:100;font-size:100}";
buf = buf.."div{width:100%;height:150px;background-color:#fff;position:absolute;-webkit-clip-path:polygon(15%0%,100%0%,85%100%,0%100%)}";
buf = buf.."input{position:absolute;font-size:50px;border-style:none;background-color:#fff;color:#333}";
buf = buf..".b{position:absolute;width:75%;left:13.5%;height:100}.c{top:500}.d{top:650}";
buf = buf.."m{position:absolute;width:100%;top:800;background-color:#0fa431;text-align:center;overflow:hidden}";
buf = buf.."h{font-size:30;position:absolute;left:0;top:-60}k{font-size:20;position:absolute;left:0}</style>";
buf = buf.."<script>function uu(){if(location.href.indexOf('go') > -1)m.style.height = '200px';}</script>";
buf = buf.."<body style='background-color:#e5e5e5;color:#333;font-family:Open Sans Condensed,sans-serif' onload='uu()'>";
buf = buf.."<p>Meal Organizer</p><div style='top:295'></div><div style='top:475'></div>";
buf = buf.."<form><input class='b'type='text'name='ssidName'placeholder='Nettverksnavn (SSID)'>";
buf = buf.."<input class='b c'type='password'name='wifiPass'placeholder='Nettverkspassord'>";
buf = buf.."<input class='b d'type='submit'name='go'value='connect'></form><m id='m'><h>Tilkoblingsinformasjon sendt til brettet</h>";
buf = buf.."<k>Du kan nå benytte ditt hjemmenettverk med meal organizer appen.</k></m></body>";
        local _on,_off = "",""
        if(_GET.go == "connect")then
              print(_GET.ssidName)
              print(_GET.wifiPass)
              connectWIFI(_GET.ssidName,_GET.wifiPass)
              displayFood()
             
        end
        client:send(buf);
        client:close();
        collectgarbage();
    end)
end)
end
 
 
function displayFood()
    srv:listen(80,function(conn)
        conn:on("receive",function(conn,payload)
        print(payload)
        conn:send("<html><body><iframe src='HOSTNAME' style='position:absolute; width:100%; height:100%; left:0px; top:0px; border-style:none;' /></body></html>")
        end)
    end)
end
 
function createAP(name,password)
    wifi.ap.config({ssid=name,pws=password})
    print("created ap")
    print(wifi.ap.getbroadcast())
end
 
function connectWIFI(name,password)
    wifi.sta.config(name,password)
    print(wifi.sta.getip())
    --192.168.18.110
end
 
function discconectAP()
    wifi.ap.config({hidden=1})
end
 
createAP("MealOrganizer","")
displayConfig()
print(wifi.sta.getip())
