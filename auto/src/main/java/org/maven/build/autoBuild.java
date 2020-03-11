package org.maven.build;

import org.jsoup.Connection;
import org.jsoup.Connection.Method;
import org.jsoup.Jsoup;

public class autoBuild {
    public static void main(String[] args) {
        try {
            Connection.Response res = Jsoup.connect("https://gitee.com/srcrs/srcrs/pages/rebuild")
                    .ignoreContentType(true)
                    .followRedirects(true)
                    .referrer("https://gitee.com/srcrs/srcrs/pages")
                    .header("x-csrf-token", "F85hxpxjSlddp6kfpewaa1h+zonyI/W4SB5JB/urBNY=")
                    .header("x-requested-with", "XMLHttpRequest")
                    .data("branch","master")
                    .data("build_directory","")
                    .data("force_https","true")
                    .header("authority", "gitee.com")
                    .header("path", "/srcrs/srcrs/pages/rebuild")
                    .header("scheme", "https")
                    .header("accept", "*/*")
                    .header("dnt", "1")
                    .method(Method.POST)
                    .cookie("cookie", "oschina_new_user=false; user_locale=zh-CN; remove_bulletin=gitee-maintain-1582772523; remote_way=http; Serve_State=true; remember_user_token=BAhbB1sGaQP9m1dJIiIkMmEkMTAkUFkxdGZvMmVlaDZHb1VaV00zL3BSZQY6BkVU--f5eecf67bdfe9126a0bd2760cb0e6e80063d4139; tz=Asia%2FShanghai; Hm_lvt_24f17767262929947cc3631f99bfd274=1583204132,1583295272,1583435853,1583472926; Hm_lpvt_24f17767262929947cc3631f99bfd274=1583472940; gitee-session-n=BAh7CUkiD3Nlc3Npb25faWQGOgZFVEkiJTRlMDdhYmEyN2JiMGZmYjY0MGQ4NWJjY2ZlZWFjNTc2BjsAVEkiGXdhcmRlbi51c2VyLnVzZXIua2V5BjsAVFsHWwZpA%2F2bV0kiIiQyYSQxMCRQWTF0Zm8yZWVoNkdvVVpXTTMvcFJlBjsAVEkiHXdhcmRlbi51c2VyLnVzZXIuc2Vzc2lvbgY7AFR7BkkiFGxhc3RfcmVxdWVzdF9hdAY7AFRJdToJVGltZQ3FCB7AO8uqkQk6DW5hbm9fbnVtaQJ0AjoNbmFub19kZW5pBjoNc3VibWljcm8iB2KAOgl6b25lSSIIVVRDBjsARkkiEF9jc3JmX3Rva2VuBjsARkkiMUY4NWh4cHhqU2xkZHA2a2ZwZXdhYTFoK3pvbnlJL1c0U0I1SkIvdXJCTlk9BjsARg%3D%3D--69cf92f5308eaf529cd0a7018877e1bda1278de7")
                    .userAgent("Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Mobile Safari/537.36")
                    .execute();
            System.out.println("srcrs");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

