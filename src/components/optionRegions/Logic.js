import axios from 'axios'
export default {
    async setup(){
            const regions = await axios
            .get("http://localhost:8080/RegionList", {
                headers: { "Content-type": "application/json" }
            }).then(function (res) {
                return res.data.response;
            });

            const communes = await axios
                    .get("http://localhost:8080/CommuneList", {
                        headers: { "Content-type": "application/json" }
                    }).then(function (res) {
                        return res.data.response;
                    });
            return { regions, communes }
    }
}
