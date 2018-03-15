import base from './base'

export default class Monies extends base {
  /**
   * 提现页面数据查询
   * @returns {Promise.<*>}
   */
  static async getWithdrawalInfo() {
    const url = `${this.baseUrl}/api/monies/withdrawal-info`
    return await this.get(url)
  }

  /**
   * 申请提现
   * @param data {money}
   * @returns {Promise.<*>}
   */
  static async applyWithdrawal(data) {
    const url = `${this.baseUrl}/api/monies/withdrawal`
    return await this.post(url, data)
  }

  /**
   * 获取提现记录
   * @returns {Promise.<*>}
   */
  static async getWithdrawalLogs(data) {
    const url = `${this.baseUrl}/api/monies/withdrawal-logs`
    return await this.get(url, data)
  }

  /**
   * 获取提现记录详情
   * @param id
   * @returns {Promise.<*>}
   */
  static async showWithdrawalLog(id) {
    const url = `${this.baseUrl}/api/monies/show-withdrawal-log/${id}`
    return await this.get(url)
  }

  /**
   * 累计收入记录
   * @param data {type, date}
   * @returns {Promise.<*>}
   */
  static async getSaleLogs(data) {
    const url = `${this.baseUrl}/api/monies/sale-logs`
    return await this.get(url, data)
  }

  /**
   * 获取累计收入记录详情
   * @param id 记录ID
   * @returns {Promise.<*>}
   */
  static async showSaleLog(id) {
    const url = `${this.baseUrl}/api/monies/show-sale-log/${id}`
    return await this.get(url)
  }

  /**
   * 获取银行卡列表
   * @returns {Promise.<*>}
   */
  static async getBanks() {
    const url = `${this.baseUrl}/api/monies/banks`
    return await this.get(url)
  }

  /**
   * 添加银行卡
   * @param data -> 银行卡表单数据
   * @returns {Promise.<*>}
   */
  static async addBankCards(data) {
    const url = `${this.baseUrl}/api/monies/bank-cards`
    return await this.post(url, data)
  }

  /**
   * 修改银行卡数据
   * @param id 银行卡ID
   * @param data 银行卡表单数据
   * @returns {Promise.<*>}
   */
  static async updateBankCard(id, data) {
    const url = `${this.baseUrl}/api/monies/bank-cards/${id}`
    return await this.put(url, data)
  }

  /**
   * 删除银行卡
   * @param id 银行卡ID
   * @returns {Promise.<*>}
   */
  static async deleteBankCard(id) {
    const url = `${this.baseUrl}/api/monies/bank-cards/${id}`
    return await this.delete(url)
  }

  /**
   * 获取银行卡详情
   * @param id 银行卡ID
   * @returns {Promise.<*>}
   */
  static async getBankCardDetail(id) {
    const url = id ? `${this.baseUrl}/api/monies/bank-cards/${id}` : `${this.baseUrl}/api/monies/bank-card-detail`
    return await this.get(url)
  }

  /**
   * 获取支出记录
   * @returns {Promise.<*>}
   */
  static async getSpendLogs() {
    const url = `${this.baseUrl}/api/monies/spend-logs`
    return await this.get(url)
  }
}
