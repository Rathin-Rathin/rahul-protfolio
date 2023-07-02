import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title=`Rahul-Portfolio | ${title}`
    },[title])
}
export default useTitle;