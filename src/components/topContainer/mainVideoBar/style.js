import styled from "styled-components";

export const MainVideoWrapper = styled.div`
  max-width: 780px;
  width: 57%;
  background: transparent
    radial-gradient(closest-side at 50% 41%, #ffffff 0%, #eef5ff 100%) 0% 0%
    no-repeat padding-box;
  padding: 25.5px;
  transform: translate(50%);
  transform: scale(1, 1);
`;

export const VideoBaner = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://blog.studentlifenetwork.com/wp-content/uploads/2019/05/augustin-de-montesquiou-346174-unsplash-670x447.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 6px 12px #0052e01a;
  border-radius: 3px;
  text-align: center;
  span {
    display: inline-block;
    transform: translate(50%);
    transform: scale(1, 1);
  }
`;
