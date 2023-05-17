import * as React from 'react';
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = React.useState<string | null>(null);
  const [transparent, setTranparent] = React.useState<boolean>(true);
  React.useEffect(() => {
    let lastScrollY = window.pageYOffset;
    // function to run on scroll
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
      if (window.pageYOffset >200) {
        setTranparent(false);
      } else {
        setTranparent(true);
      }
    };
    window.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection,transparent]); // run when scroll direction changes

  return [scrollDirection,transparent];
}
export default useScrollDirection;
