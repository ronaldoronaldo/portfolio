import styled from 'styled-components'
import { colors, sizes } from 'config/ui'

export const GithubHeatmapHeader = styled.div`
  width: 100%;
  display: inline-flex;
  .total-contributions {
    color: ${colors.black5};
    font-size: 26px;
    font-weight: 400;
    width: 100%;
    line-height: 26px;
    margin-top: 0;
    @media (min-width: ${sizes.mScreen}px) {
       font-size: 18px;
    }
  }
`
export const OpacityMask = styled.div`
  background-image: linear-gradient(
    to left,
    rgba(255, 255, 255, 0) 0%,
    ${colors.white} 75%
  );
  z-index: 5;
  position: absolute;
  left: 40px;
  width: 30px;
  top: 1px;
  height: 98%;
`

export const StyledRow = styled.div`
  width: 100%;
  display: flex;
  overflow-x: hidden;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  .github-tiles-days {
    position: absolute;
    height: 100%;
    left: 0;
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 38px;
    font-size: 12px;
    z-index: 5;
    background-color: ${colors.white};
    border-top: 1px solid ${colors.black2};
    border-left: 1px solid ${colors.black2};
    border-bottom: 1px solid ${colors.black2};
    .github-tiles-day {
      height: 14px;
      margin-bottom: 3px;
      color: #767676;
    }
  }
`

export const GithubHeatmapBox = styled.div`
  min-width: 1000px;
  height: 211px;
  border: 1px solid ${colors.black2};
  display: inline-block;
  background-color: ${colors.white};
  border-radius: 3px;
  vertical-align: center;
  .github-months-box {
    margin-bottom: 10px;
    margin-top: 10px;
    position: relative;
    right: -40px;
    .github-months-box-item {
      display: inline-block;
      width: 74px;
      font-size: 12px;
      color: #767676;
      &:nth-of-type(1) {
        margin-left: 91px;
      }
    }
  }
  .github-heatmap-footer {
    width: 100%;
    margin-top: 15px;
    div {
      display: inline-block;
      margin-right: 3px;
    }
    .learn-how-link {
      position: relative;
      left: 32px;
    }
    .legend {
      float: right;
      position: relative;
      right: 25px;
      .legend-label {
        color: #888888;
        margin-right: 5px;
        margin-left: 4px;
      }
      .legend-tiles {
        position: relative;
        top: 4px;
      }
    }
  }

  .__react_component_tooltip {
    background-color: ${colors.black6} !important;
    opacity: 0.85 !important;
    color: ${colors.white} !important;
  }

  .github-tiles {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    left: 60px;
  }

  .github-tiles-column {
    position: relative;
  }

  .github-tile {
    width: 14px;
    height: 14px;
    margin-right: 3px;
    margin-bottom: 3px;
    transition: background-color 0.6s ease;
    &.github-color-tone-dark {
      background-color: #196127;
    }

    &.github-color-tone-normal {
      background-color: #239a3b;
    }

    &.github-color-tone-light {
      background-color: #7bc96f;
    }

    &.github-color-tone-weak {
      background-color: #c6e48b;
    }

    &.github-color-tone-nothing {
      background-color: #ebedf0;
    }
  }
`

export const GithubHeatmapControls = styled.div`
  display: none;
  flex-direction: column;
  vertical-align: top;
  position: relative;
  padding-left: 16px;
  @media (min-width: ${sizes.mdScreen}px) {
    display: flex;
  }
  ul{
    padding: 0;
    display: inline-block;
  }
  .year-button-class{
      cursor: pointer;
      font-size: 16px;
      margin-bottom: 5px;
      border-radius: 3px;
      color: #8a8a8a;
      display: block;
      position: relative;
      text-decoration: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100px;
      height: 40px;
      line-height: 30px;
      font-weight: bold;
      text-align: center;
      vertical-align: middle;
      &:hover{
          background-color: #e8e8e8;
      }
      .year-label{
          position: relative;
          right: 20px;
          top: 6px;
      }
  }

  .year-button-class-selected{
      background-color: #0366d6;
      color: #fff;
      &:hover{
          background-color: #0254b0;
      }
  }
`
