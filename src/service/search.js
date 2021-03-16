import axios from "./axios";
import {
    __server,
    __helperUrl,
} from "@jx3box/jx3box-common/data/jx3box.json";

function getPost(title, page) {
    return axios.get(__server + "post/list", {
        params: {
            title,
            page: page || 1,
        },
    });
}

function getAuthor(name, page) {
    return axios.get(__server + "user/list", {
        params: {
            name,
            page: page || 1,
        },
    });
}

function getCj(keyword, page) {
    return axios.get(__helperUrl + "api/achievement/search", {
        headers: {
            Accept: "application/prs.helper.v2+json",
        },
        params: {
            keyword,
            page,
        },
    });
}

function getItem(keyword, page) {
    return axios.get(__helperUrl + "api/item/search", {
        headers: {
            Accept: "application/prs.helper.v2+json",
        },
        params: {
            keyword,
            page,
        },
    });
}

export { getPost, getAuthor, getCj, getItem };
