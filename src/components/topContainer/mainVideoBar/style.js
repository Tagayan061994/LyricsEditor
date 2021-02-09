import styled from "styled-components";

export const MainVideoWrapper = styled.div`
  flex-basis: 57%;
  /* padding: 0.5px; */
  transform: scale(0.8);
  flex: 2;
  background: transparent
    radial-gradient(closest-side at 30% 41%, #ffffff 0%, #eef5ff 100%) 0% 0%
    no-repeat padding-box;
`;

export const VideoBaner = styled.div`
  padding-top:60%;
  background-image: url("https://blog.studentlifenetwork.com/wp-content/uploads/2019/05/augustin-de-montesquiou-346174-unsplash-670x447.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 6px 12px #0052e01a;
  border-radius: 3px;
  text-align: center;
  span {
    display: inline-block;
  }
`;
