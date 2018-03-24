export const state = () => ({
    question: null
});

export const mutations = {
    SET_QUESTION(state, question) {
        state.question = question;
    },
    ADD_ANSWER(state, answer) {
        answer.newAddedAnswer = true;
        state.question.answers.unshift(answer);
        state.question.answers.sort((a, b) => b.upVotes - a.upVotes)
    },
    UP_VOTE_ANSWER(state, answerId) {
        let upVoteAnswer = state.question.answers.find((answer) => answer.answerId === answerId);
        upVoteAnswer.upVotes++;
        upVoteAnswer.hasVoted = true;
    },
    DOWN_VOTE_ANSWER(state, answerId) {
        let downVoteAnswer = state.question.answers.find((answer) => answer.answerId === answerId);
        downVoteAnswer.upVotes--;
        downVoteAnswer.hasVoted = false;
    }
};

export const actions = {
    async deleteQuestion({commit, state}) {
        await this.$axios.$delete(`/user/question`, {params: {questionId: state.question.questionId}});
    },
    async upVoteAnswer({commit, state}, answerId) {
        await this.$axios.$post(`/user/question/answer/upVote/${answerId}`);
        commit('UP_VOTE_ANSWER', answerId);
    },
    async downVoteAnswer({commit, state}, answerId) {
        await this.$axios.$delete(`/user/question/answer/upVote/${answerId}`);
        commit('DOWN_VOTE_ANSWER', answerId);
    },
    async createTextAnswer({commit, state}, {answer}) {
        let response = await this.$axios.$post(`/user/question/answer/text/${state.question.questionId}`, {answer});
        commit('ADD_ANSWER', {
            answerId: response.answerId, isAdmin: true, upVotes: 0,
            answerType: 'Text', answer, created: response.created, creator: response.creator
        });
        return response.answerId;
    },
    async createYoutubeAnswer({commit, state}, youtubeData) {
        let response = await this.$axios.$post(`/user/question/answer/youtube/${state.question.questionId}`,
            youtubeData);
        youtubeData.answerId = response.answerId;
        youtubeData.answerType = 'Youtube';
        youtubeData.isAdmin = true;
        youtubeData.upVotes = 0;
        youtubeData.idOnYoutube = response.idOnYoutube;
        youtubeData.linkEmbed = `https://www.youtube.com/embed/${response.idOnYoutube}`;
        youtubeData.created = response.created;
        youtubeData.creator = response.creator;
        commit('ADD_ANSWER', youtubeData);
        return response.answerId;
    },
    async createLinkAnswer({commit, state}, linkData) {
        let response = await this.$axios.$post(`/user/question/answer/link/${state.question.questionId}`,
            linkData);
        linkData.answerId = response.answerId;
        linkData.answerType = 'Link';
        linkData.pageType = linkData.type;
        linkData.isAdmin = true;
        linkData.upVotes = 0;
        linkData.created = response.created;
        linkData.imageUrl = response.imageUrl;
        linkData.creator = response.creator;
        commit('ADD_ANSWER', linkData);
        return response.answerId;
    },
    async createBookAnswer({commit, state}, bookData) {
        let response = await this.$axios.$post(`/user/question/answer/book/${state.question.questionId}`,
            bookData);
        bookData.answerId = response.answerId;
        bookData.answerType = 'Book';
        bookData.isAdmin = true;
        bookData.upVotes = 0;
        bookData.created = response.created;
        bookData.imageUrl = response.imageUrl;
        bookData.creator = response.creator;
        commit('ADD_ANSWER', bookData);
        return response.answerId;
    }
};
