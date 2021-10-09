import React from 'react'

export default function Zalo() {
    return (
        <div>
            {/* <div class="zalo-chat-widget" data-oaid="579745863508352884" data-welcome-message="Rất vui khi được hỗ trợ bạn!"
                data-autopopup="0" data-width="150" data-height="300"></div> */}

            <div class="zalo-chat-widget" data-oaid="579745863508352884" data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="0" data-width="150" data-height="300"></div>

            <script src="https://sp.zalo.me/plugins/sdk.js"></script>
        </div>
    )
}
