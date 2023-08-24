import $ from 'jquery';
import {useEffect} from "react";

export default function Index() {

    useEffect(() => {

        $("body").addClass("dark-mode");

    });

}
