export default {
       async fetch(request, env, ctx) {
                        const url = new URL(request.url);
                        url.hostname = env.HOST || 'digikala.com';
                        url.protocol = 'https:';
                        request = new Request(url, request);
                        return fetch(request);
              }
};
