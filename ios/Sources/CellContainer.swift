import Foundation

@objc class CellContainer: UIView {
    var index: Int = -1
    var top: Double = -1
    
    @objc func setIndex(_ index: Int) {
        self.index = index
    }
    @objc func setTop(_ top: Double) {
        self.top = top
    }
}
