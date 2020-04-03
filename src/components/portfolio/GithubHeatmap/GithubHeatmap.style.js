import styled from 'styled-components'

export const GithubHeatmapHeader = styled.div`
  width: 1000px;
  display: inline-flex;
  .total-contributions{
      color: #24292e;
      font-size: 26px;
      font-weight: 400;
      width: 800px;
  }
  .contribution-settings-button{
      color: #586069!important;
      background-color: transparent !important;
      border: none !important;
      float: right;
      padding-right: 0;
      font-size: 19px;
      position: relative;
      top: -5px;
      &:focus{
          outline: 0;
          border: 0 !important;
          box-shadow: none;
      }
  }
`

export const GithubHeatmapBox = styled.div`
  width: 1000px;
  height: 230px;
  border: 1px solid #d1d5da;
  display: inline-block;
  background-color: ${colors.white};
  border-radius: 4px;
  vertical-align:center;
  .github-months-box{
      margin-bottom: 10px;
      margin-top: 10px;
      .github-months-box-item{
          display: inline-block;
          width: 74px;
          font-size: 12px;
          color: #767676;
          &:nth-of-type(1){
              margin-left: 91px;
          }
      }
  }
  .github-heatmap-footer{
  width: 100%;
  margin-top: 15px;
  div{
      display: inline-block;
      margin-right: 3px;
  }
  .learn-how-link{
      position: relative;
      left: 32px;
  }
  .legend{
      float: right;
      position: relative;
      right: 25px;
      .legend-label{
          color: #888888;
          margin-right: 5px;
          margin-left: 4px;
      }
      .legend-tiles{
          position: relative;
          top: 4px;
      }
  }
}

    .github-tiles{
        display: flex;
        flex-wrap: wrap;
        position: relative;
        left: 20px;
        .github-tiles-days{
            width: 30px;
            position: relative;
            font-size: 12px;
            margin-left: 5px;
            margin-right: 5px;

            .github-tiles-day{
                height: 14px;
                margin-bottom: 3px;
                color: #767676;
            }
        }
    }

    .github-tiles-column{
        position: relative;
    }

    .github-tile{
        width: 14px;
        height: 14px;
        margin-right: 3px;
        margin-bottom: 3px;
        transition: background-color 0.6s ease;
        &.github-color-tone-dark{
            background-color: #196127;
        }

        &.github-color-tone-normal{
            background-color: #239a3b
        }

        &.github-color-tone-light{
            background-color: #7bc96f;
        }

        &.github-color-tone-weak{
            background-color: #c6e48b;
        }

        &.github-color-tone-nothing{
            background-color: #ebedf0;
        }
    }
`

export const GithubHeatmapControls = styled.div`
  display: inline-block;
    height: 175px;
    vertical-align: top;
    position: relative;
    bottom: 55px;
    ul{
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
        width: 120px;
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

