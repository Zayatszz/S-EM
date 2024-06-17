export const isParentActive = (children, parent,  path) => {
    if (!children && !path) {
        return false;
    }
    if(parent.path){
        if(parent.path === path)
        return true;
    }
    // return children.path ===path ? true :false
    return children.some((item) =>
        item.path === path

            ? true
            : item?.subMenu?.some((item2) => item2.path === path)
    );
    // return true
};
