import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title=`Rahul-Protfolio | ${title}`
    },[title])
}
export default useTitle;