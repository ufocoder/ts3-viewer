<template>
    <div class="item">
        <div class="level is-mobile">
            <div class="level-left">
                <span class="level-item">
                    <img src="/img/channel.svg" v-if="!channel.channel.spacer">
                </span>
                <span class="level-item" v-text="channel.channel.name" v-if="!channel.channel.spacer"></span>

                <span class="level-item" v-text="channel.channel.spacerName" v-if="channel.channel.spacer && channel.channel.spacerAlignment == 1"></span>
                <span class="level-item" v-if="channel.channel.spacer && channel.channel.spacerName.length == 0"><br></span>
            </div>

            <div class="level-center">
                <span class="level-item" v-text="channel.channel.spacerName" v-if="channel.channel.spacerAlignment == 2 || channel.channel.spacerAlignment == 4"></span>
            </div>

            <div class="level-right">
                <span class="level-item" v-if="!channel.channel.spacer">
                    <img src="/img/home.svg" v-if="channel.channel.defaultChannel">
                    <img src="/img/lock.svg" v-if="channel.channel.passwordProtected">
                    <img src="/img/music.svg" v-if="channel.channel.codec == 5">
                    <img src="/img/moderated.svg" v-if="channel.channel.neededTalkPower > 0">
                </span>
                <span class="level-item" v-text="channel.channel.spacerName" v-if="channel.channel.spacerAlignment == 3"></span>
            </div>
        </div>

        <div class="list">
            <div class="item">
                <div class="list">
                    <div class="item" v-for="client in channel.clients">
                        <div class="level is-mobile">
                            <div class="level-left">
                                <span class="level-item">
                                    <img src="/img/away.svg" v-if="client.away">
                                    <img src="/img/sound-off.svg" v-else-if="client.soundMuted || client.soundDisabled">
                                    <img src="/img/mic-off.svg" v-else-if="client.micMuted || client.micDisabled">
                                    <img src="/img/person.svg" v-else>
                                </span>
                                <span class="level-item" v-text="client.name"></span>
                            </div>

                            <div class="level-right">
                                <span class="level-item">
                                    <img src="/img/mic.svg" v-if="client.talkPower < channel.channel.neededTalkPower && client.isTalker">
                                    <img src="/img/mic-off.svg" v-else-if="client.talkPower < channel.channel.neededTalkPower && !client.isTalker">
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <teamspeak-channel v-for="subChannel in channel.subChannels" :channel="subChannel" :key="subChannel.name"></teamspeak-channel>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['channel'],
    }
</script>
